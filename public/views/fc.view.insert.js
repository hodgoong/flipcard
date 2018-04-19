const insert = 
        `
        <div class="card" style="width: 22rem; height: 12rem; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" v-if="isVisible">
            <div class="card-body">
                <form action="http://localhost:8000/api/add-new-flipcard" method="post">
                    <input type="text" name="frontside" placeholder="front side">
                    <input type="text" name="backside" placeholder="back side">
                    <input type="text" name="username" placeholder="user name">
                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>
        `