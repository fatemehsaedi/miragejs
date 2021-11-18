export const routeHandler = (context) => {
  context.get("/reminder", (schema) => {
    return schema.reminders.all();
  });
  context.post("/reminder", (schema, request) => {
    const result = JSON.parse(request.requestBody);
    return schema.reminders.create(result);
  });
  context.delete("/reminder/:id", (schema,request) => {
    const idParam = request.param.id;
    return schema.reminders.find(idParam).distroy();
  });
};
