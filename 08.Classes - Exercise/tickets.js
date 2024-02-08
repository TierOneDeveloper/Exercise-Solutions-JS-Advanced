function tickets(ticketData, criteria) {
  let result = [];

  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  for (let each of ticketData) {
    let [destination, price, status] = each.split("|");
    price = Number(price);
    let currentTicket = new Tickets(destination, price, status);
    result.push(currentTicket);
  }
  return result.sort((a, b) => { return criteria === "price" ? a.price - b.price : a[criteria].localeCompare(b[criteria]) });

}

tickets(['Philadelphia|94.20|available',
  'New York City|95.99|available',
  'New York City|95.99|sold',
  'Boston|126.20|departed'],
  'destination')