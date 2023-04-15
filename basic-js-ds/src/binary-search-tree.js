const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = { parent: null, value: null, smallerChild: null, biggerChild: null }


  root() {
    return this.tree.value
  }

  add(data) {
    if (!this.tree.value) {
      this.tree.value = data
    } else {
      const rec = (data, treeItem) => {
        if (data > treeItem.value) {
          if (!treeItem.biggerChild) {
            treeItem.biggerChild = { parent: treeItem.value, value: data, smallerChild: null, biggerChild: null }
          } else {
            rec(data, treeItem.biggerChild)
          }
        } else {
          if (!treeItem.smallerChild) {
            treeItem.smallerChild = { parent: treeItem.value, value: data, smallerChild: null, biggerChild: null }
          } else {
            rec(data, treeItem.smallerChild)
          }
        }

      }
      rec(data, this.tree)
    }
  }

  has(data) {
    const rec = (treeItem) => {
      if (treeItem.value === data) {
        return true
      } else if (treeItem.value < data) {
        if (treeItem.biggerChild) {
          rec(treeItem.biggerChild)
        } else {
          return false
        }
      } else {
        if (treeItem.smallerChild) {
          rec(treeItem.smallerChild)
        } else {
          return false
        }
      }
    }
    rec(this.tree)
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    let res=null
    const rec = (treeItem) => {
        if (treeItem.biggerChild) {
            rec(treeItem.biggerChild)
        } else {
            res = treeItem.value
        }
    }
    if (!this.tree.biggerChild) {
        return
    } else {
         rec(this.tree)
    }
    return res
  }

  min() {
    let res=null
    const rec = (treeItem) => {
        if (treeItem.smallerChild) {
            rec(treeItem.smallerChild)
        } else {
            res = treeItem.value
        }
    }
    if (!this.tree.smallerChild) {
        return
    } else {
         rec(this.tree)
    }
    return res
  }
}

module.exports = {
  BinarySearchTree
};