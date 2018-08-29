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
      success: callback,
      error: (response) => console.log(response.responseText)
    };
    $.ajax(ITEMS_URL, data);
  };

  const updateItem = function(id, updateData, callback) {
    $.ajax({
      url: `${ITEMS_URL}/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback,
      error: (response) => console.log(response.responseText)
    });
  };

  return {
    getItems,
    createItem,
    updateItem
  };
}());