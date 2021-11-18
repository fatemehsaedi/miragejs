export const seedHandler = (server) => {
  server.create("reminder", { id: 1, name: "reminder1" ,description:'this is desc'});
  server.create("reminder", { id: 2, name: "reminder2" ,description:'this is desc'});
};
