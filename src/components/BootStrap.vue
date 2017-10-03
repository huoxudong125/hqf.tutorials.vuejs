<template>
  <div>
    <div>
      <div class="alert alert-success" role="alert">...</div>
      <div class="alert alert-info" role="alert">...</div>
      <div class="alert alert-warning" role="alert">...</div>
      <div class="alert alert-danger" role="alert">...</div>

      <div class="alert alert-warning alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>Warning!</strong> Better check yourself, you're not looking too good.
      </div>

      <div class="alert alert-success" role="alert">
        <a href="#" class="alert-link">...</a>
      </div>
      <div class="alert alert-info" role="alert">
        <a href="#" class="alert-link">...</a>
      </div>
      <div class="alert alert-warning" role="alert">
        <a href="#" class="alert-link">...</a>
      </div>
      <div class="alert alert-danger" role="alert">
        <a href="#" class="alert-link">...</a>
      </div>
    </div>

    <div class="progress">
      <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0"
           aria-valuemax="100" style="width: 40%">
        <span class="sr-only">40% Complete (success)</span>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0"
           aria-valuemax="100" style="width: 20%">
        <span class="sr-only">20% Complete</span>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0"
           aria-valuemax="100" style="width: 60%">
        <span class="sr-only">60% Complete (warning)</span>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0"
           aria-valuemax="100" style="width: 80%">
        <span class="sr-only">80% Complete (danger)</span>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
           style="width: 60%;">
        60%
      </div>
    </div>


    <br>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
    <br>
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-8">.col-12 .col-sm-6 .col-lg-8</div>
      <div class="col-6 col-lg-4">.col-6 .col-lg-4</div>
    </div>
    <div class="row">
      <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
      <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
      <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'bootStrap',
  };

</script>

<style scoped="">
  .row {
    margin-bottom: 1rem;
  }

  .row .row {
    margin-top: 1rem;
    margin-bottom: 0;
  }

  [class*="col-"] {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: rgba(86, 61, 124, .15);
    border: 1px solid rgba(86, 61, 124, .2);
  }
</style>
