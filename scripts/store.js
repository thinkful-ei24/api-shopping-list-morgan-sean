'use strict';

/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndUpdate = function(id, newData) {
    let match = this.items.find((item) => (item.id === id));
    Object.assign(match, newData);
  };

  const findAndDelete = function(id) {
    console.log(this.items);
    let index = this.items.findIndex(findById(id));
    console.log(index);
    this.items.splice(index, 1);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    addItem,
    findById,
    toggleCheckedFilter,
    setSearchTerm,
    findAndUpdate,
    findAndDelete
  };
  
}());
