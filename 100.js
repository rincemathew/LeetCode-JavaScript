// Same Tree

// tree-ds check leetcode\https://leetcode.com/problems/same-tree/description/

var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if(!p || !q || p.val !== q.val) {
        return false
    }
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
};