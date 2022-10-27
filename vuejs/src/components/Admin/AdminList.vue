<template>
  <tr>
    <td>{{item.id}}</td>
    <td>{{item.email}}</td>
    <td>{{item.name}}</td>
    <td>{{item.category}}</td>
    <td>{{item.price}}т</td>
    <td>{{item.qty}}</td>
    <td>{{item.price * item.qty}}т</td>
  </tr>
</template>

<script>
export default {
    name: "AdminList",
    props: ["item"],
}
</script>