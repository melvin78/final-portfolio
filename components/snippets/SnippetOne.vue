<template>
  <div>
  <pre>
        <code v-highlight class="csharp hljs">
          //ticket entity class
    public class Ticket : BaseEntity
       {
        public string TicketNo { get; set; }
        public string FirstMessage { get; set; }
        public Guid? CareTaker { get; set; }
        public Guid TicketStatusId { get; set; }
        public Guid CustomerId { get; set; }
        public Guid EnquiryCategoryId { get; set; }
        public  Guid EnquiryId { get; set; }
        public Guid OrganizationId { get; set; }
        public string Attachments { get; set; }
        public string? Remarks { get; set; }
        public DateTime? ClosedOn { get; set; }
        public DateTime? ResolvedOn { get; set; }
        public int PriorityLevel { get; set; }
        public DateTime? ReopenedOn { get; set; }
        public DateTime? CancelledOn { get; set; }
        public DateTime? TransferredOn { get; set; }
        public DateTime? AssignedOn { get; set; }
        public DateTime? PastDueDate { get; set; }
        public DateTime? ExpectedDueDate { get; set; }

        }

        </code>
      </pre>
    <p class="ml-5">So thats how my ticket entity class looks like containing all this properties.When using EFCore
    this will be interpreted as columns on my database when using code-first approach. The project uses
      specification,repository and factory pattern(<a class="text-blue-300 hover:text-blue-400">here</a>  is an article i wrote about
      design patterns).Will just show them in the following snippets so you will see how they will all later come to fit
    in together.</p>
  </div>
</template>

<script>

export default {
  name: "SnippetOne",


  mounted() {
  }
}
</script>

<style scoped>

</style>
