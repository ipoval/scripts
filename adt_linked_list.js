'#!/usr/bin/env node';

/* work around to load this file in 2 environments: node.js and web-browser */
window = this;

(function(global) {

'use strict';

/*
 * ADT (Abstract Data Type) LINKED LIST implemented based on object references
 *
 * @author: @ipoval
 * @run:    node -p 'require("./adt_linked_list");'
 */
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = new Node('head');
}

LinkedList.prototype = {
  toString: function() {},
  find: function(data) {
    var curNode = this.head;
    do {
      if (curNode.data === data) {
        return curNode
      }
    } while ( curNode.next )
  },
  insert: function(data, afterNodeWithData) {
    var afterNode = this.find(afterNodeWithData);
    if ( !afterNode ) { return; }
    afterNode.next = new Node(data);
  },
  remove: function() {}
};

global.adt_LinkedList = LinkedList;

})(window);

/*
 * __END__
 */

if ( typeof(require) !== 'undefined' && require.main == module ) {
  console.error('Invoked at command line.');
  var symbols = process.argv;
  console.dir(symbols);
  console.info("\n");

  var linked_list = new window.adt_LinkedList();


} else {
  console.error('adt_linked_list.js: invoked via library call');
}