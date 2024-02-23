const companyData = {
    companyName: "ABC Corporation",
    employees: [
      {
        id: 1,
        name: "Rachana Zumakzod",
        position: "Software Engineer",
        contact: {
          email: "rachana@example.com",
          phone: "555-1234"
        },
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345"
        }
      },
      {
        id: 2,
        name: "Sakshi Durge",
        position: "Marketing Specialist",
        contact: {
          email: "sakshi@example.com",
          phone: "555-5678"
        },
        address: {
          street: "456 Oak St",
          city: "Othercity",
          state: "NY",
          zip: "67890"
        }
      }
    ]
  };
  
  console.log(companyData.employees[0].name); 
  console.log(companyData.employees[1].position); 
  