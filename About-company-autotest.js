describe("Click link", function() {
    it("About company", function() {
        cy.visit('http://www.bastion.com.ua/')
        cy.wait(2000)
        cy.get('.top-nav-item > [href="/pages/about_company"]').click()
        cy.wait(2000)
        cy.get('.current > .side-menu-sub > :nth-child(1) > a').click()
        cy.get('.current > .side-menu-sub > :nth-child(2) > a').click()
        cy.get('.current > .side-menu-sub > :nth-child(3) > a').click()
        cy.get('.current > .side-menu-sub > :nth-child(4) > a').click()
        cy.get('.current > .side-menu-sub > :nth-child(5) > a').click()
        cy.get('.current > .side-menu-sub > :nth-child(6) > a').click()
        cy.get('tbody > :nth-child(1) > :nth-child(2) > input').type('Alex')
        cy.get('#region').select("Odes'ka Oblast'")
        cy.get(':nth-child(3) > :nth-child(2) > input').type('Autoparts')
        cy.get(':nth-child(4) > :nth-child(2) > input').type('Alex')
        cy.get(':nth-child(5) > :nth-child(2) > input').type('0639567646')
        cy.get(':nth-child(6) > :nth-child(2) > input').type('24auto@gmail.com')
        cy.get('textarea').type('Автоматизация на Cypress')
        cy.get('[valign="top"] > [type="text"]').type(7+7+7)
        cy.contains("Отправить").click()

    })
})
