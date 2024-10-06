import { onFormLayoutsPage } from "../support/page_objects/formLayoutsPage"
import { navigateTo } from "../support/page_objects/navigationPage"
import { onSmartTablePage } from "../support/page_objects/smartTablePage"
import { onDatepickerPage } from "./datapickerPage"

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

    it.only('should submit Inline and Basic form and select tomorow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Ewelina', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithNameAndEmail('test@test.com', 'password')
        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(30)
        onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)
        onSmartTablePage.addNewRecordWithFirstAndLastName('Ewelina', 'Test')
        onSmartTablePage.updateAgeByFirstName('Ewelina', '25')
        onSmartTablePage.deleteRowByIndex(1)
    })
})
