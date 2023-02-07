using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission04_trev3law.Models
{
    public class GradeModel
    {
        [Required]
        [Range(0, 100)]
        public decimal Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal GroupProjects { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal MidtermExam { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal FinalExam { get; set; }

        [Required]
        [Range(0, 100)]
        public decimal Intex { get; set; }
    }
}
