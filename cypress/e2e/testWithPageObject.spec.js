import { navigateTo } from "../support/page_objects/navigationPage"

describe('Test with Page Objects', () => {

    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('verify navigations across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toastrPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })
})
