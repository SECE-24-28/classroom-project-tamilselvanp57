   let emp=[{ena:"arun",mob:111},
      {ena:"ajith",mob:110},
      {ena:"Tamil",mob:211},
      {ena:"surya",mob:131},
      {ena:"max",mob:249},
      {ena:"krew",mob:153},
      {ena:"liuke",mob:111}]
   let newEmp=emp.filter((emp)=>{
      return emp.ena.includes("A")
   })
   console.log(newEmp);