/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('brand').del()
  .then(function () {
    // Inserts seed entries
    return knex('brand').insert([
      {
        "title": "HINDUSTAN UNILEVER",
        "summary": "Hindustan Unilever Limited is a British-owned Indian consumer goods company headquartered in Mumbai. It is a subsidiary of the British company Unilever. Its products include foods, beverages, cleaning agents, personal care products, water purifiers and other fast-moving consumer goods."
      },
      {
        "title": "MARICO",
        "summary": "Marico Limited is an Indian multinational consumer goods company providing consumer products and services in the areas of health, beauty and wellness. With its headquarters in Mumbai, Marico is present in over 25 countries across Asia and Africa."
      },
      {
        "title": "DAAWAT",
        "summary": "Daawat The Finest Basmati In the 1980s, our founders set out with a vision. A vision to serve the best Basmati rice to families across the world. Four decades past, and we have spread our roots in over 70+ countries. And today, we're a household name representing premium quality basmati rice."
      },
      {
        "title": "ITC",
        "summary": " ITC is one of India's foremost private sector companies.  ITC has a diversified presence in FMCG, Hotels, Packaging, Paperboards & Specialty Papers and Agri-Business."
      }
    ]);
  });
};
