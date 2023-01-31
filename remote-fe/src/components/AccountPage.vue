<template>
   <section style="background-color: #eee;">
      <div class="container py-5">
         <div class="row">
            <div class="col-lg-4">
               <div class="card mb-4">
                  <div class="card-body text-center">
                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        class="rounded-circle img-fluid" style="width: 150px;">
                     <h5 class="my-3">John Smith</h5>
                     <p class="text-muted mb-2">@username</p>
                     <p class="text-muted mb-1">Technician/User</p>
                     <div class="d-flex justify-content-center mb-2">
                        <button type="button" class="btn btn-primary">Messages</button>
                     </div>
                  </div>
               </div>
               <div class="card mb-4 mb-lg-0">
                  <div class="card-body p-0">
                     <ul class="list-group list-group-flush rounded-3">
                        <h5 class="my-2">Services</h5>

                     </ul>
                  </div>
               </div>
            </div>
            <div class="col-lg-8">
               <div class="card mb-4">
                  <div class="card-body">
                     <div class="row">
                        <div class="col-sm-3">
                           <p class="mb-0">Full Name</p>
                        </div>
                        <div class="col-sm-9">
                           <p class="text-muted mb-0">Johnatan Smith</p>
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-sm-3">
                           <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                           <p class="text-muted mb-0">example@example.com</p>
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-sm-3">
                           <p class="mb-0">Phone</p>
                        </div>
                        <div class="col-sm-9">
                           <p class="text-muted mb-0">0800 2344-5678</p>
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-sm-3">
                           <p class="mb-0">Mobile</p>
                        </div>
                        <div class="col-sm-9">
                           <p class="text-muted mb-0">+44 7655-4321</p>
                        </div>
                     </div>
                     <hr>
                     <div class="row">
                        <div class="col-sm-3">
                           <p class="mb-0">Address</p>
                        </div>
                        <div class="col-sm-9">
                           <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                        </div>
                        <div class="col-sm-3">
                           <p class="text-muted mb-0">Post Code</p>
                        </div>
                        <div class="col-sm-9">
                           <p class="text-muted mb-0">KF76 9LM</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="card mb-4">
                  <div class="card-body">
                     <ul class="list-group list-group-flush rounded-3">
                        <h5 class="my-2">Reviews</h5>
                        <ReviewCard />
                     </ul>
                  </div>
               </div>
               
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import ReviewCard from "@/components/ReviewCard.vue"
const reviews = []
const services = []
export default {
   name: "AccountPage",
   components: {
      ReviewCard,
   },
}
</script>
<style scoped>

</style>