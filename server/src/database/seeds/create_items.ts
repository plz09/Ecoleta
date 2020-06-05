import Knex from 'knex';

export async function seed(knex: Knex) {
    knex('items').insert([
        { title: 'Lâmpadas', image: 'Lampadas.svg'},
        { title: 'Lâmpadas', image: 'Lampadas.svg'},
        { title: 'Lâmpadas', image: 'Lampadas.svg'},
        { title: 'Lâmpadas', image: 'Lampadas.svg'},
        { title: 'Lâmpadas', image: 'Lampadas.svg'},
        { title: 'Lâmpadas', image: 'Lampadas.svg'},
    ]);
}