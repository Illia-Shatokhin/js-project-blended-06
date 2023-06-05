import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';


export default class CreatePagination {
  constructor(object, requestType = '') {

    this.object = object;
    this.options = {
      totalItems: object.total_results,
      itemsPerPage: object.results.length,
      visiblePages: 4,
      page: object.page,
      centerAlign: true,
      requestType: requestType,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn"><span class="add-zero-pagination">0</span>{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected"><span class="add-zero-pagination">0</span>{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    }
  }

  activatePagination() {
    const pagination = new Pagination('tui-pagination-container', this.options);
    pagination.on('afterMove', ({ page }) => {
      // this.object.moveToPage(page);
    });
  }
}