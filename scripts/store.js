'use strict';

/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const items = [];

  const addItem = function(item) {
    items.push(item);
  };

  const findById = function(id) {
    return items.find(item => item.id === id);
  };

  const findAndUpdate = function(id, newData) {
    let match = items.find((item) => (item.id === id));
    Object.assign(match, newData);
  };

  const findAndDelete = function(id) {
    let index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items,
    hideCheckedItems: false,
    searchTerm: '',
    displayError: false,
    addItem,
    findById,
    toggleCheckedFilter,
    setSearchTerm,
    findAndUpdate,
    findAndDelete
  };
  
}());
