<template>
  <div>
  <pre>
    <code v-highlight class="csharp">
    public class AssignTicketService : IAssignTicketService
    {
        private readonly ITicketService _ticketService;
        private readonly List&lt;TicketDetailsDTO&gt; _unassignedTickets;
        private readonly IUnitOfWork _unitOfWork;
        private readonly List&lt;Agent&gt; _agentList;
        private readonly IAgentService _agentService;

        public AssignTicketService(
            IUnitOfWork unitOfWork,
            ITicketService ticketService,
            IAgentService agentService,
         ){
            _unitOfWork = unitOfWork;
            _ticketService = ticketService;
            _agentService = agentService;
            _unassignedTickets = GetAllUnassignedTickets();
            _agentList = GetAgentList();
          }
      }
    </code>
  </pre>
    <p class="ml-5">
      This is now the heart of the code. You can see we are passing other services into our constructor.Dependency injection
      to the rescue. <code> IUnitOfWork</code> responsible for creating repositories for our entities(repository pattern being used here),
      <code>ITicketService</code> responsible for handling all CRUD operations that will take place in our ticket entity,
      basically any operation to do with a ticket will be housed here,same thing goes for <code>IAgentService</code>.
      Had shared the properties present in both of these entities in the previous snippets.
    </p>
  </div>
</template>

<script>
export default {
  name: "AssignTicketServiceClasss"
}
</script>

<style scoped>

</style>
