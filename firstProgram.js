const printMenuForDay = day => {
    switch (day.toLowerCase()) {
        case 'monday':
            console.log("Monday's Menu: Spaghetti and Meatballs");
            break;
        case 'tuesday':
            console.log("Tuesday's Menu: Tacos");
            break;
        case 'wednesday':
            console.log("Wednesday's Menu: Grilled Chicken Salad");
            break;
        case 'thursday':
            console.log("Thursday's Menu: Stir-Fry Noodles");
            break;
        case 'friday':
            console.log("Friday's Menu: Pizza");
            break;
        case 'saturday':
            console.log("Saturday's Menu: BBQ Ribs");
            break;
        case 'sunday':
            console.log("Sunday's Menu: Roast Beef");
            break;
        default:
            console.log("Invalid day of the week!");
    }
};

// Example usage:
printMenuForDay('Monday');
printMenuForDay('Friday');
printMenuForDay('Sunday');
