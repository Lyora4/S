// Simple script for maintenance page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Lyora System - Vercel Timeout Error Page');
    console.log('Error: 504 GATEWAY_TIMEOUT - FUNCTION_INVOCATION_TIMEOUT');
    console.log('Solution: Manual registration via Discord required');
});

// Add click tracking for Discord link
document.querySelector('.discord-btn')?.addEventListener('click', function() {
    console.log('User clicked Discord link for manual registration');
});