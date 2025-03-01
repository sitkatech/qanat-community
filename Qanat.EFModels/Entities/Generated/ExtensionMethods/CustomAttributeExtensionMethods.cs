//  IMPORTANT:
//  This file is generated. Your changes will be lost.
//  Use the corresponding partial class for customizations.
//  Source Table: [dbo].[CustomAttribute]

using Qanat.Models.DataTransferObjects;

namespace Qanat.EFModels.Entities
{
    public static partial class CustomAttributeExtensionMethods
    {
        public static CustomAttributeSimpleDto AsSimpleDto(this CustomAttribute customAttribute)
        {
            var dto = new CustomAttributeSimpleDto()
            {
                CustomAttributeID = customAttribute.CustomAttributeID,
                GeographyID = customAttribute.GeographyID,
                CustomAttributeTypeID = customAttribute.CustomAttributeTypeID,
                CustomAttributeName = customAttribute.CustomAttributeName
            };
            return dto;
        }
    }
}