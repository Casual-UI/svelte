<script>
  import { circOut, cubicInOut } from 'svelte/easing'
  import { crossfade } from 'svelte/transition'
  import { flip } from 'svelte/animate'
  import {
    closeByPositionGroupAndID,
    notifications,
  } from '../hooks/useNotification'
  import CPopup from './CPopup.svelte'

  const notification = (node, params, intro) => {
    const style = getComputedStyle(node)
    const transform = style.transform === 'none' ? '' : style.transform
    return {
      duration: 300,
      easing: circOut,
      css: t => `
        transform: ${transform} ${
          params.x === 'start' ? `translateX(${-100 + t * 100}px)` : ''
        } ${params.x === 'end' ? `translateX(${100 - t * 100}px)` : ''} ${
          params.x === 'center'
            ? `translateY(${(100 - t * 100) * (intro ? 1 : -1)}px)`
            : ''
        };
        opacity: ${t};
      `,
    }
  }

  const [send, receive] = crossfade({
    duration: 300,
    easing: circOut,
    fallback: notification,
  })
</script>

{#each Object.entries($notifications) as [groupName, { x, y, items }]}
  <CPopup
    horizontalAlign="{x}"
    verticalAlign="{y}"
    customClass="c-popup--notification c-notification"
  >
    <div class="c-notification--item-list">
      {#each items as item (item.id)}
        <div
          animate:flip="{{ duration: 300, easing: cubicInOut }}"
          in:receive="{{ key: item.id, x, y }}"
          out:send="{{ key: item.id, x, y }}"
          class="{`c-notification--item-card c-notification--item-theme-${item.theme}`}"
        >
          <!--
            Customize the content of each notification item
            @param {any} itemInfo all the item's props will be passed to this slot. <br />For example: `message`, `title`, `theme`, `timeout`
           -->
          <slot name="item" itemInfo="{item}">
            <div class="c-notification--header">
              <div class="c-notification--title">
                {item.title}
              </div>
              {#if item.closeIcon}
                <div
                  class="c-notification--close-icon"
                  on:click="{() =>
                    closeByPositionGroupAndID(groupName, item.id)}"
                  on:keypress="{() =>
                    closeByPositionGroupAndID(groupName, item.id)}"
                  role="button"
                  tabindex="0"
                >
                  <svg
                    class="c-notification--countdown-bar"
                    viewBox="0 0 24 24"
                  >
                    {#if item.timeout && item.timeout > 0}
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="transparent"
                        class="c-notification--countdown-bar-circle c-notification--countdown-bar-circle-with-initial-state"
                        style="--c-notification-duration: {item.timeout}ms;"
                      ></circle>
                    {/if}
                  </svg>
                  <div
                    i-majesticons-close
                    class="c-notification--close-icon-icon"
                  ></div>
                </div>
              {/if}
            </div>
            <div class="c-notification--message">
              {item.message}
            </div>
          </slot>
        </div>
      {/each}
    </div>
  </CPopup>
{/each}
