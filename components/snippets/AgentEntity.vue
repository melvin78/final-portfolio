<template>
<div>
  <pre>
    <code v-highlight class="csharp">
      public class Agent:BaseEntity
      {
        public Guid UserId { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string SecondName { get; set; }
        public bool HasToken { get; set; }
        public Guid DepartmentId { get; set; }
        public DateTime? TokenAssignmentDate { get; set; }
        public string Avatar { get; set; }
        public string Role { get; set; }

      }
    </code>
  </pre>
  <p class="ml-5">
   This is the agent entity class it contains all information about our agents.
    It has two very important properties the <code>HasToken</code> and <code>TokenAssignmentDate</code>
    . As we will be assigning an agent with a ticket, we want to ensure that there is equal and fair distribution.
    This two columns will help us ensure that.


  </p>
</div>
</template>

<script>
export default {
  name: "AgentEntity"
}
</script>

<style scoped>

</style>
