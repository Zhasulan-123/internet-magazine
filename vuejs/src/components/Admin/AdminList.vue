<template>
    <tr>
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.description}}</td>
        <td>{{item.slug}}</td>
        <td>{{item.category}}</td>
        <td>{{item.price}}</td>
        <td>{{item.length}}</td>
        <td>{{item.width}}</td>
        <td>{{item.weight}}</td>
    </tr>
</template>

<script>
export default {
    name: "AdminList",
    props: ["item"],
}
</script>