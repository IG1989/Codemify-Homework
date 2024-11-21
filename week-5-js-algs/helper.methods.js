class Helpers {
    // helperMethods.getUsersByAge(response, 30, 40)); // [ Alice, Eva, Frank, Henry, Karon ]
    getUsersByAge(response, ageMin, ageMax) {
        const users = [];

        // Filter all users younger than 40 and older than 30.
       response.users.forEach(user => {
        if(user.age >= ageMin && user.age <= ageMax) users.push(user.name);
        })

        return users;
    }

    // [ Alice, Eva, Henry ]
    getUsersByRole(apiBody, role) {
        const users = [];

        apiBody.users.forEach(user => {
            if(user.role === role) users.push(user.name);
        });

        return users;
    }

    getUsersByCountry(response, country) {
        const users = [];

        response.users.forEach(user => {
            if(user.country === country) users.push(user.name);
        });

        return users;
    }
    getUsersByBalance(response, balMin, balMax) {
        const users = [];

        response.users.forEach(user => {
            if(user.balance >= balMin && user.balance <= balMax) users.push(user.name);
        });

        return users;
    }
}

export default new Helpers()