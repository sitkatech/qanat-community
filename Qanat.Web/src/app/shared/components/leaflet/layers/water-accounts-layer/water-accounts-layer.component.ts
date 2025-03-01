import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChange } from "@angular/core";
import * as L from "leaflet";

import { MapLayerBase } from "../map-layer-base.component";
import { WfsService } from "src/app/shared/services/wfs.service";
import { GroupByPipe } from "src/app/shared/pipes/group-by.pipe";
import { WellMinimalDto } from "src/app/shared/generated/model/well-minimal-dto";
import { LeafletHelperService } from "src/app/shared/services/leaflet-helper.service";
@Component({
    selector: "water-accounts-layer",
    standalone: true,
    imports: [CommonModule, MapLayerBase],
    templateUrl: "./water-accounts-layer.component.html",
    styleUrls: ["./water-accounts-layer.component.scss"],
})
export class WaterAccountsLayerComponent extends MapLayerBase implements OnChanges, AfterViewInit {
    @Input() controlTitle: string = "My Water Accounts";
    @Input({ required: true }) geographyID: number;
    @Input() waterAccountIDs: number[];
    @Input() selectedWaterAccountID: number;

    @Input() wells: WellMinimalDto[];

    @Output() layerBoundsCalculated = new EventEmitter();
    @Output() waterAccountSelected = new EventEmitter<number>();

    public isLoading: boolean = false;

    public layer: L.featureGroup;
    public wellLayer: L.featureGroup;

    private defaultStyle = {
        color: "#3388ff",
        weight: 2,
        opacity: 0.65,
        fillOpacity: 0.1,
    };

    private highlightStyle = {
        color: "#fcfc12",
        weight: 2,
        opacity: 0.65,
        fillOpacity: 0.1,
    };

    private wellIcon = this.leafletHelperService.blueIconLarge;

    constructor(private wfsService: WfsService, private groupByPipe: GroupByPipe, private leafletHelperService: LeafletHelperService) {
        super();
    }

    ngOnChanges(changes: any): void {
        if (changes.selectedWaterAccountID) {
            if (changes.selectedWaterAccountID.previousValue == changes.selectedWaterAccountID.currentValue) return;
            this.selectedWaterAccountID = changes.selectedWaterAccountID.currentValue;
            this.highlightSelectedtWaterAccount();
        } else if (Object.values(changes).some((x: SimpleChange) => x.firstChange === false)) {
            this.updateLayer();
        }
    }

    ngAfterViewInit(): void {
        this.setupLayer();
        this.updateLayer();
    }

    private updateLayer() {
        this.isLoading = true;
        this.layer.clearLayers();

        this.addWaterAccountParcelsToLayer();
        this.addWellsToLayer();

        this.layer.addTo(this.map);
        this.isLoading = false;
    }

    private addWaterAccountParcelsToLayer() {
        let cql_filter = `GeographyID = ${this.geographyID}`;
        if (this.waterAccountIDs) {
            cql_filter += ` and WaterAccountID in (${this.waterAccountIDs.join(",")})`;
        }

        this.wfsService.getGeoserverWFSLayer(null, "Qanat:AllParcels", cql_filter).subscribe((response) => {
            if (response.length == 0) return;

            const featuresGroupedByWaterAccountID = this.groupByPipe.transform(response, "properties.WaterAccountID");

            Object.keys(featuresGroupedByWaterAccountID).forEach((waterAccountID) => {
                const geoJson = L.geoJSON(featuresGroupedByWaterAccountID[waterAccountID], {
                    style: this.defaultStyle,
                });

                // IMPORTANT: THIS ONLY WORKS BECAUSE I'VE INSTALLED @angular/elements AND CONFIGURED THIS IN THE app.module.ts bootstrapping
                geoJson.bindPopup(`<water-account-popup-custom-element water-account-id="${waterAccountID}"></water-account-popup-custom-element>`, {
                    maxWidth: 475,
                    keepInView: true,
                });

                geoJson.on("mouseover", (e) => {
                    geoJson.setStyle({ fillOpacity: 0.5 });
                });
                geoJson.on("mouseout", (e) => {
                    geoJson.setStyle({ fillOpacity: 0.1 });
                });

                geoJson.on("click", (e) => {
                    this.onWaterAccountSelected(Number(waterAccountID));
                });

                geoJson.addTo(this.layer);
            });

            const bounds = this.layer.getBounds();
            this.map.fitBounds(bounds);
            this.layerBoundsCalculated.emit(bounds);
        });
    }

    private addWellsToLayer() {
        if (this.wells?.length == 0) return;

        const markers = this.wells.map((well) => {
            const latLng = L.latLng(well.Latitude, well.Longitude);
            return new L.marker(latLng, { icon: this.wellIcon, zIndexOffset: 1000, interactive: true, title: well.WellID }).on("click", (e) => {
                this.onWellSelected(Number(well.WellID));
            });
        });

        markers.forEach((marker) => {
            marker.addTo(this.layer);
        });
    }

    private onWaterAccountSelected(waterAccountID: number) {
        this.selectedWaterAccountID = waterAccountID;
        this.highlightSelectedtWaterAccount();

        this.waterAccountSelected.emit(waterAccountID);
    }

    private onWellSelected(wellID: number) {
        const selectedWell = this.wells.find((x) => x.WellID == wellID);
        if (!selectedWell?.WaterAccountID) return;

        this.onWaterAccountSelected(selectedWell.WaterAccountID);
    }

    private highlightSelectedtWaterAccount() {
        // clear styles
        this.layer.setStyle(this.defaultStyle);
        this.map.closePopup();

        this.layer.eachLayer((layer) => {
            // skip if well layer
            if (layer.options?.icon) return;

            const geoJsonLayers = layer.getLayers();
            if (geoJsonLayers[0].feature.properties.WaterAccountID == this.selectedWaterAccountID) {
                layer.setStyle(this.highlightStyle);
                layer.openPopup();
                this.map.fitBounds(layer.getBounds());
            }
        });
    }

    private setupLayer() {
        this.layer = L.geoJSON();
        // this.waterAccountParcelLayer = L.featureGroup();
        this.wellLayer = L.featureGroup();
        this.initLayer();
    }
}
