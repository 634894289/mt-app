import Vue from 'vue'

Vue.directive('document-click', {
    bind: (el, bindding) => {
        document.addEventListener('click', bindding.value, false);
    }
})