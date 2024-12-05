class Helpers {
    getUsersByStatus(response, status) {
        const users = [];
        response.users.filter(user => {
            let roleObject = user.role;
            if (roleObject.status === status && roleObject.description !== null && roleObject.description !== "") {
                users.push(user.name);
            }
        });
        return users;

    }

    getUsersByRole(response, role, roleId) {
        const users = [];

        response.users.forEach(user => {
            let roleObject = user.role;
            if(roleObject.role === role && user.roleId === roleId) {
                users.push(user.name);
            }
        })
        return users;
    }

    getUsersByEmailDomain(response, domain) {
        const users = [];
        response.users.forEach(user => {
            if(user.domain = domain) {
                users.push(user.name)
            }
        })

        return users;
    }

    getUserBalanceByCurrency(response, currency) {
        const balances = [];

        response.users.forEach(user => {
            if(user.currency === currency) {
                balances.push(user.name)
            }
        })

        return balances;
    }
}

export default new Helpers()