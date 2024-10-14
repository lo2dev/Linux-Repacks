const nav_view = workbench.builder.get_object("nav_view");
const page1 = workbench.builder.get_object("page1");
const page2 = workbench.builder.get_object("page2");
const page3 = workbench.builder.get_object("page3");

const page1_next_button = workbench.builder.get_object("page1_next_button");
const install_page_button = workbench.builder.get_object("install_page_button");

page1_next_button.connect("clicked", () => {
  nav_view.push(page2);
});

install_page_button.connect("clicked", () => {
  nav_view.push(page3);
});
