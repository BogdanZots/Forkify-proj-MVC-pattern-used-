import icons from 'url:../../img/icons.svg';
import View from './View.js';
class PaginationView extends View {
    _parentElement = document.querySelector('.pagination')
    _generateMarkup(res) {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        if (this._data.page === 1 && numPages > 1) {
            return 'page 1 others'
        }
        if (this._data.page === numPages) {
            return 'page last'
        }
        if (this._data.page < numPages) {
            return 'others'
        }
    }
}
export default new PaginationView();