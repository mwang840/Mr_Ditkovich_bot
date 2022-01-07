class linkedList{
    constructor(airline, flightNumber, destination, time){
        this.airline = airline;
        this.flightNumber = flightNumber;
        this.time = time;
        this.destination = destination;
        this.next = NULL;
        this.size = 1;
    }

    constructor(){
        airline = "Default";
        this.flightNumber = 0;
        this.time = '0:00';
        this.destination = "Default";
        this.next = NULL;
        this.size = 1;
    }
    //Adding an airline flight in a linked list
    add(airline, fligtNumber, destination, time){
        var Node = new linkedList(airline, fligtNumber, destination, time);
        var temp = Node;
        if(this.head == NULL){
            this.head = Node;
        }
        else{
            temp = this.head;
            while(temp.next){
                temp = temp.next;
            }
            temp.next = Node;
        }
        this.size++;
    };
    //Inserting the airline node in the linked list
    insert(airline,flightNumber, destination, time, index){
        //If the index is less than zero or above the linked list size, NULL is returned
        if(index < 0 || index > this.size){
            return NULL;
        }
        else{
            var temp = new linkedList(airline, flightNumber,destination, time);
            var current, previous;
            current = this.head;

            //Checks to see if the index is equal to 0
            if(index = 0){
                temp.next = this.head;
                this.head = temp;
            }
            //Else place it throughout the linked list
            else{
                current = this.head;
                var find = 0;

                while(find < index){
                    find++;
                    previous = current;
                    current = current.next;
                }
                temp.next = current;
                previous.next = temp;
            }
            this.size++;
        }
    }

    remove(index){
        //Checks to see if the element is out of bounds
        if(index < 0 || index >= this.size){
            return NULL;
        }
        else{
            var current, previous, initial = 0;
            current = this.head;
            previous = current;

            //Checks if the element is the first index
            if(index == 0){
                this.head = current.next;
            }
            //If not iterate over the linked list O(n) time
            else{
                while(initial < index){
                    initial++;
                    previous = current;
                    current = current.next;
                }

                //The element is removed when initial >= index
                previous.next = current.next;
            }
            this.size--;
            return current.temp;
        }
    }
}