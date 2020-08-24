<template>
  <div class="">
    <h1>This is an Contacts page</h1>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Gender</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>Male</td>
      <td><button>Edit</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>Male</td>
      <td><button>Edit</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>Male</td>
      <td><button>Edit</button></td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ContactsPage',
  components: {
  }
}
</script>
