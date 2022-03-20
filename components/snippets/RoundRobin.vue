<template>
  <div>
  <pre>
    <code v-highlight class="csharp">
       public void AssignRoundRobin(CancellationToken cancellationToken)
        {
         //->1
         var roundRobinListOfagents = new RoundRobinList&lt;Agent&gt;(
                _agentList
            );


         //->2
           for (var j = 0; j < _unassignedTickets.Count; j++)
            {
               //->3
                _ticketService.AssignAgentToUser(_unassignedTickets[j].TicketNo,
                    roundRobinListOfagents.Next().UserId);

                //->4
                if (j == _unassignedTickets.Count - 1)
                    _agentService.AssignAgentWithToken(_agentList.Last().UserId,
                        _agentList.First().UserId);
            }
       }
    </code>
  </pre>
    <p class="ml-5">
      <span class="font-bold">Line 1:</span> This is where the RoundRobin package comes in handy. We pass
      our list of agents <code>_agentList</code> to the constructor of the class <code>RoundRobinList()</code>.
      This way we can expose the methods <code>.Next()</code> and <code>.First()</code><br><br>

      <span class="font-bold">Line 2:</span> We do a for loop based on the count of unassgined tickets. <br><br>

      <span class="font-bold">Line 3:</span> So for every iteration i.e unassigned ticket, we will update the column
      <code>CareTaker</code> in the tickets table with the agents Identity <code>agentId</code>.
      The two entities are related using this field. We use the <code>AssignAgentToUser()</code> method which
      is a member of <code>TicketService</code> class.<br>
      This method requires two parameters <code>string ticketNo</code> and <code>Guid agentId</code>. In SQL terms this
      method will essentialy run this query <code>UPDATE Ticket_Table SET CareTaker= agentId where TicketNo =
      ticketNo;</code>
      With this query we would have assigned a ticket to an agent, so that if we were to run the <code>UnattendedTicketSpecification()</code>
      class it will no longer return a result set since the caretaker column will no longer be null.<br><br>

      <span class="font-bold">Line 4:</span> This is where the fair distribution of tickets takes place.We make sure
      that the last agent to receive
      a ticket is the one to get a token. We do that by doing a comparison between the total number of tickets minus one
      (since we started from zero) and the counter variable <code>J</code>. If it evaluates to true then we will know we are in the last iteration.
      So we pass the token from the last agent to the first agent. See how the linked list data structure comes in handy.

    </p>
  </div>
</template>

<script>
export default {
  name: "RoundRobin"
}
</script>

<style scoped>

</style>
