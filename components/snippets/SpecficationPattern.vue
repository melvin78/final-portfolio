<template>
  <div>
    <pre>
      <code v-highlight class="csharp">
   public class UnattendedTicketSpecification:BaseSpecification &lt;Ticket&gt;
    {
        public override Expression &lt;Func&lt;Ticket, bool>> SpecExpression
        {
            get
            {
                return o => o.CareTaker == Guid.Empty;
            }
        }

    }
      </code>

    </pre>
    <p class="ml-5">
      This specification class will return all tickets that are yet to be assigned a CareTaker.This is where the background
      task will start executing, by finding out how many tickets are yet to be assigned. The snippet above is just an oversimplification
      of what is happening. Again an ORM in this case EfCore does all the magic for us, the class will be compiled back
      down to a LINQ query, then the ORM will use that LINQ query to create an SQL query that will be run against our data source.
      Essentially in MYSQL terms this specification class will be interpreted as
      <code>SELECT * FROM TICKETS WHERE CareTaker = NULL</code>
    </p>
  </div>

</template>

<script>
export default {
  name: "SpecficationPattern"
}
</script>

<style scoped>

</style>
