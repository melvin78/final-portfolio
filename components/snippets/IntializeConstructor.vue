<template>
<div>
  <pre>
    <code v-highlight class="csharp">
       public List&lt;TicketDetailsDTO&gt; GetAllUnassignedTickets()
        {
            var unassignedTickets = _unitOfWork.Repository&lt;Ticket&gt;().FindAll(new UnattendedTicketSpecification());

            return _mapper.Map&lt;List&lt;TicketDetailsDTO&gt;&gt;(unassignedTickets);
        }

        public List&lt;Agent&gt; GetAgentList()
        {
            return _unitOfWork.Repository&lt;Agent&gt;().FindAll(new UserAgentSpecification())
                .ToList();
        }
    </code>
  </pre>
  <p class="ml-5">
    First method returns a list of all tickets that havent been assigned.(Shared the new UnattendedTicketSpecification Class)
    Second method returns a list of agents from our database. We are also using another nuget package called
    <a href="https://automapper.org/" class="text-blue-300 hover:text-blue-400">AutoMapper</a>.Helps us in transforming
    our entity with properties that will only need.
  </p>
</div>
</template>

<script>
export default {
  name: "IntializeConstructor"
}
</script>

<style scoped>

</style>
