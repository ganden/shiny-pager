pager <- function(inputId, label=c("<< prev","next >>"), value = 0, min = 0, max = 10) {
  stopifnot(value >= min)
  stopifnot(value <= max)
  tagList(
    singleton(tags$head(tags$script(src = "pager.js"))),
    tags$ul(id = inputId, class="pager", value = as.character(value), max = max, min = min,
            tags$li(class = paste("previous","pager-previous", ifelse(value <= min, "disabled", "")),
                    tags$a(label[1], href="#prev")),
            tags$li(class = paste("next","pager-next", ifelse(value >= max, "disabled", "")),
                    tags$a(label[2], href="#next")))
  )
}
