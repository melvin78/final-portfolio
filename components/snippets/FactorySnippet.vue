<template>
  <div>
    <pre>
      <code v-highlight class="csharp">
          public static class TicketFactory
        {
        //Factory class that will be used to save any changes to a ticket. We have made it static so that its not instantiable.

        public static Ticket CreateNewTicket(
            Guid customerId, Guid enquiryCategoryId, Guid organizationId, Guid? careTaker,
            string attachments, string ticketNo, DateTime? resolvedOn,
            string firstMessage, Guid ticketStatusId, int priority, string remarks,
            DateTime? closedOn,
            DateTime? cancelledOn,
            DateTime? transferredOn,
            DateTime? assignedOn,
            DateTime? reopenedOn,
            DateTime? pastDueDate,
            Guid EnquiryId,
            DateTime? expectedDueDate
        )
        {
            var ticket = new Ticket();
            ticket.GenerateNewIdentity();
            ticket.TicketNo = ticketNo;
            ticket.OrganizationId = organizationId;
            ticket.TicketStatusId = ticketStatusId;
            ticket.Attachments = attachments;
            ticket.CareTaker = careTaker;
            ticket.PriorityLevel = priority;
            ticket.EnquiryCategoryId = enquiryCategoryId;
            ticket.ResolvedOn = resolvedOn;
            ticket.CustomerId = customerId;
            ticket.CreatedAt = DateTime.Now;
            ticket.FirstMessage = firstMessage;
            ticket.Remarks = remarks;
            ticket.ClosedOn = closedOn;
            ticket.ReopenedOn = reopenedOn;
            ticket.CancelledOn = cancelledOn;
            ticket.TransferredOn = transferredOn;
            ticket.AssignedOn = assignedOn;
            ticket.PastDueDate = pastDueDate;
            ticket.EnquiryId = EnquiryId;
            ticket.ExpectedDueDate = expectedDueDate;

             return ticket;
        }
      </code>

    </pre>
    <p class="ml-5">
      We create a static class that has a return type of our entity class 'ticket'.Whatever parameters values that
      are passed to this class is what will be inserted into our columns in the table. ORMs(Object relational Mappers)
      does this for us.
    </p>
  </div>

</template>

<script>
export default {
  name: "FactorySnippet"
}
</script>

<style scoped>

</style>
