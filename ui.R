source('widget.R')
shinyUI(pageWithSidebar(
  headerPanel("Pager Sample"),
  sidebarPanel(
    pager("page", value = 0, min = 0, max = 1),
    conditionalPanel(
      condition = "input.page == 0",
      selectInput("dataset", "Choose a dataset:", 
                  choices = c("rock", "pressure", "cars"))
    ),
    conditionalPanel(
      condition = "input.page == 1",
      numericInput("obs", "Number of observations to view:", 10)
    )
  ),
  mainPanel(
    conditionalPanel(
      condition = "input.page == 0",
      h4("Summary"),
      verbatimTextOutput("summary")
    ),
    conditionalPanel(
      condition = "input.page == 1",
      h4("Observations"),
      tableOutput("view")
    )
  )
))
