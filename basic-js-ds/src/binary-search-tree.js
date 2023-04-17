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
    let res = false
    const rec = (treeItem) => {
        if (treeItem.value === data) {
            res = true
            return
        } else if (treeItem.value < data) {
            if (treeItem.biggerChild) {
                rec(treeItem.biggerChild)
            } else {
                return
            }
        } else {
            if (treeItem.smallerChild) {
                rec(treeItem.smallerChild)
            } else {
                return
            }
        }
    }
    rec(this.tree)
    return res
  }

  find(data) {
    
    let res = null
    const rec = (treeItem) => {
        if (treeItem.value === data) {
            res = treeItem.value
            return
        } else if (treeItem.value < data) {
            if (treeItem.biggerChild) {
                rec(treeItem.biggerChild)
            } else {
                return 
            }
        } else {
            if (treeItem.smallerChild) {
                rec(treeItem.smallerChild)
            } else {
                return 
            }
        }
    }
    rec(this.tree)
    return res
  }

  remove(/* data */) {
    const rec = (treeItem) => {
      if (treeItem.value === data) {
          if (!treeItem.biggerChild && !treeItem.smallerChild) {
              const parent = this.find(treeItem.parent)
              if (parent.value > data) {
                  parent.smallerChild = null
              } else {
                  parent.biggerChild = null
              }
              return
          } else if ((treeItem.biggerChild && !treeItem.smallerChild) || (!treeItem.biggerChild && treeItem.smallerChild)) {
              const parent = this.find(treeItem.parent)
              if (parent.value > data) {
                  const parentCode = parent.smallerChild.parent
                  if (treeItem.biggerChild) {
                      log('treeItem.biggerChild', JSON.parse(JSON.stringify(treeItem.biggerChild)))
                      parent.smallerChild = treeItem.biggerChild
                      parent.smallerChild.parent = parentCode
                  } else {
                      parent.smallerChild = treeItem.smallerChild
                      parent.smallerChild.parent = parentCode
                  }
              } else {
                  const parentCode = parent.smallerChild.parent
                  if (treeItem.biggerChild) {
                      parent.biggerChild = treeItem.biggerChild
                      parent.biggerChild.parent = parentCode
                  } else {
                      parent.biggerChild = treeItem.smallerChild
                      parent.biggerChild.parent = parentCode
                  }
              }
              return

          } else {
              // log('res',JSON.parse(JSON.stringify(treeItem)))

          }

      } else if (treeItem.value < data) {
          if (treeItem.biggerChild) {
              rec(treeItem.biggerChild)
          } else {
              return
          }
      } else {
          if (treeItem.smallerChild) {
              rec(treeItem.smallerChild)
          } else {
              return
          }
      }
  }
  rec(this.tree)
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