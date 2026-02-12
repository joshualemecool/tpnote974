import { faker } from '@faker-js/faker';

//partie register
export type TestUser = {
    name: string;
    email: string;
    password: string;
};

export function generateUser(): TestUser {
    const password = faker.internet.password({
        length: 12,
        memorable: false,
    });

    return {
        name: faker.person.fullName(),
        email: faker.internet.email().toLowerCase(),
        password,
    };
}

// partie shipping
export type TestShipping = {
    phone: string;
    address: string;
    city: string;
    postalCode: string;
};

export function generateShipping(): TestShipping {
    return {
        phone: '06' + faker.string.numeric(8), // 06 + 8 chiffres aléatoires
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        postalCode: faker.location.zipCode('#####'),
    };
}

// partie paiement
export type TestPayment = {
    cardNumber: string;
    cardName: string;
    expiry: string;
    cvv: string;
};

export function generatePayment(): TestPayment {
    const future = faker.date.future();
    const month = String(future.getMonth() + 1).padStart(2, '0');
    const year = String(future.getFullYear()).slice(-2);

    return {
        cardNumber: faker.finance.creditCardNumber('#### #### #### ####'),
        cardName: faker.person.fullName(),
        expiry: `${month}/${year}`,
        cvv: faker.string.numeric(3),
    };
}



