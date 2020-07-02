/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let levelArray = [];
    var readLevel = function(node, level) {
        if(!node) {
           return;
        } else {
            if(!levelArray[level]) {
               levelArray[level] = [];
            }
            levelArray[level].push(node.val);
            readLevel(node.left, level + 1);
            readLevel(node.right, level + 1);
        }
    }
    readLevel(root, 0);
    levelArray.reverse();
    return levelArray;
};
