<template>
  <div class="dropdown">
    <a
      class="btn btn-secondary dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Sort By
    </a>

    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Price</a></li>
      <li><a class="dropdown-item" href="#">Reviews</a></li>
      <li><a class="dropdown-item" href="#">Distance</a></li>
    </ul>
    <a
      class="btn btn-secondary dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Order
    </a>

    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Asc</a></li>
      <li><a class="dropdown-item" href="#">Desc</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TechnicianNavBar",
};
</script>
<style scoped>
.dropdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom:20px;
  margin-top: 10px
}

.dropdown-toggle {
  white-space: nowrap;
  background-color: white;
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  color: #101518;
  box-shadow: 0px 2px 20px #e7e7e7;
  margin: 10px;
  font-weight: 600;
}
</style>
