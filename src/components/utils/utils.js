export const addCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// Function that format new Date() to 'MM/DD/YYYY HH:MM '
export const formatDateTime = currentDate => {
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();

    const formattedDateTime = `
        ${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year} 
        ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

    return formattedDateTime;
}