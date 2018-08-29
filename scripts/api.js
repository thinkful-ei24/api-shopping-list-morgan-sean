'use strict';

/* globals $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/morgan-sean';
  const ITEMS_URL = `${BASE_URL}/items`;

  const getItems = function(callback) {
    $.getJSON(ITEMS_URL, callback);
  };

  const createItem = function(name, callback) {
    let newItem = { name };
    let jsonData = JSON.stringify(newItem);
    const data = {
      method: 'POST',
      contentType: 'application/json',
      data: jsonData,
      success: callback
    };
    $.ajax(ITEMS_URL, data);
  };

  return {
    getItems,
    createItem
  };
}());