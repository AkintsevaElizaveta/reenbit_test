class DateTimeHelper{
    static fromJSON(initialDate){
        const dateValue = new Date(initialDate);
        return `${dateValue.toLocaleDateString()} ${dateValue.toLocaleTimeString()}`;
    }
}

export default DateTimeHelper;