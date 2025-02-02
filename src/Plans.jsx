const Plans = () => {
    return (
<section class="py-16 bg-background">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-4xl font-bold text-gray-200 mb-4">Secure Your Communication</h2>
    <p class="text-lg text-gray-300 mb-12">
      Choose the plan that fits your privacy needs.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
      <div class="p-8 rounded-2xl shadow-lg border bg-primary text-gray-200 transition-transform duration-300 ease-in-out">
        <h3 class="text-2xl font-semibold mb-4">Free</h3>
        <p class="text-4xl font-bold mb-2">
          $0<span class="text-xl font-normal">/month</span>
        </p>

        <ul class="my-6 space-y-2 text-left">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            2GB Storage
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Basic Encryption
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Limited Support
          </li>
        </ul>

        <button class="px-4 py-3 mt-4 bg-accent text-gray-800 rounded-3xl hover:bg-gray-100 font-semibold">
          Get Started for Free
        </button>
      </div>

      <div class="p-8 rounded-2xl shadow-lg border bg-gradient-to-br from-secondary to-tertiary text-white transform scale-105 transition-transform duration-300 ease-in-out">
        <h3 class="text-2xl font-semibold mb-4">Secure Pro</h3>
        <p class="text-4xl font-bold mb-2">
          $5<span class="text-xl font-normal">/month</span>
        </p>

        <ul class="my-6 space-y-2 text-left">
          <li class="flex items-center">
            <svg class="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Unlimited Storage
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            End-to-End Encryption
          </li>
          <li class="flex items-center">
            <svg class="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            Priority Support
          </li>
        </ul>

        <button class="px-4 py-3 mt-4 bg-accent text-gray-800 rounded-3xl hover:bg-gray-100 font-semibold">
          Upgrade Now
        </button>
      </div>
    </div>
  </div>
</section>

    );
}

export default Plans;