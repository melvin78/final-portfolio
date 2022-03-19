<template>
  <div>
<pre>
  <code v-highlight class="csharp">

    public interface IAssignTicketService
    {
        Task &lt;bool&gt; SendEmailNotificationAsync(string ticketNo, string receiverEmailAddress);

        void AssignRoundRobin(CancellationToken cancellationToken);



    }

  </code>
</pre>
    <p class="ml-5">
      So this is our contract any class inheriting from this interface will
      have to implement these methods. <code>AssignRoundRobin()</code> is where the logic
      of auto ticket-assigment is going to take place and <code>SendEmailNotificationAsync</code>
      is where the logic of sending email to notify the agent that he/she has been assigned a ticket.

    </p>

  </div>
</template>

<script>
export default {
  name: "AssignTicketService"
}
</script>

<style scoped>

</style>
