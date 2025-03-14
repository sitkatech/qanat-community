﻿using Microsoft.EntityFrameworkCore;

namespace Qanat.EFModels.Entities
{
    [Keyless]
    public class WaterTypeSupply
    {
        public WaterTypeSupply()
        {
        }

        public int WaterTypeID { get; set; }
        public string WaterTypeName { get; set; }
        public decimal? TotalSupply { get; set; }
        public int? WaterAccountID { get; set; }
    }
}